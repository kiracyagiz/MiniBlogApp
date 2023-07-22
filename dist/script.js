document.addEventListener("DOMContentLoaded", function (e) {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      e.preventDefault();
      const cards = document.getElementById("cards");

      data.forEach((item) => {
        const div = document.createElement("div");
        const secondDiv = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const buttonSecond = document.createElement("button");
        buttonSecond.id = "secondButton";
        const bookMark = document.getElementById("bookMarks");

        //PARENT DIV
        div.className = "parentDiv";
        div.classList.add("m-12");

        ///H1 AND DESCRIPTION
        h1.innerHTML = item.title;
        h1.classList.add("font-bold", "text-3xl", "mb-3");
        p.innerHTML = item.description;

        if (p.textContent.length > 50) {
          p.textContent = p.textContent.slice(0, 50) + "...";
        }

        //BUTTONS
        button.textContent = "Read More";
        buttonSecond.textContent = "Add to Bookmark";
        button.classList.add(
          "border-2",
          "border-gray-100",
          "hover:border-gray-900",
          "px-4",
          "py-1",
          "rounded-lg"
        );
        buttonSecond.classList.add(
          "border-2",
          "border-gray-100",
          "hover:border-gray-900",
          "px-4",
          "py-1",
          "rounded-lg"
        );

        //BUTTON ACTIVITY

        button.addEventListener("click", function () {
          const queryParams = encodeURIComponent(JSON.stringify(item.id));

          window.location.href = "post.html?post=" + queryParams;
        });

        ///CHILD DIV
        secondDiv.classList.add("flex", "gap-x-5", "mt-5");

        secondDiv.appendChild(button);
        secondDiv.appendChild(buttonSecond);

        div.appendChild(h1);
        div.appendChild(p);
        div.append(secondDiv);

        cards.appendChild(div);

        if (item.bookmarked === false) {

        } else {
          let h1 = document.createElement("h1");
          let p = document.createElement("p");
          let div = document.createElement("div");

          div.id = `myDiv-${item.id}`;
          h1.textContent = item.title;
          p.innerHTML = item.description;
          if (p.textContent.length > 30) {
            p.textContent = p.textContent.slice(0, 80);
          }

          div.classList.add("m-8");
          h1.classList.add("text-xl", "font-bold");
          div.appendChild(h1);
          div.appendChild(p);

          bookMark.appendChild(div);
          buttonSecond.classList.add("bg-black", "text-white");
          buttonSecond.textContent = "Remove From Bookmark";
        }

        buttonSecond.type = "button";
        let counter = 1;

        buttonSecond.addEventListener("click", function (event) {
          if (item.bookmarked) {
            let url = `http://localhost:3000/users/${item.id}`;
        
            let myDiv = document.getElementById(`myDiv-${item.id}`);
            myDiv.remove();
            buttonSecond.classList.remove("bg-black", "text-white");
            buttonSecond.textContent = "Add to Bookmark";
        
            let myObj = {
              id: item.id,
              title: item.title,
              description: item.description,
              bookmarked: false,
            };
        
            let options = {
              method: "PUT",
              body: JSON.stringify(myObj),
              headers: {
                "Content-Type": "application/json",
              },
            };
        
            fetch(url, options)
              .then((response) => response.json())
              .then((data) => {
                item.bookmarked = false;
              })
              .catch((error) => {
                console.log("Hata", error);
              });
          } else {
            buttonSecond.classList.add("bg-black", "text-white");
            buttonSecond.textContent = "Remove from Bookmark";
        
            let url = `http://localhost:3000/users/${item.id}`;
        
            let h1 = document.createElement("h1");
            let p = document.createElement("p");
            let div = document.createElement("div");
        
            div.id = `myDiv-${item.id}`;
            h1.textContent = item.title;
            p.innerHTML = item.description;
            if (p.textContent.length > 50) {
              p.textContent = p.textContent.slice(0, 200);
            }
        
            div.classList.add("m-8");
            h1.classList.add("text-xl", "font-bold");
            div.appendChild(h1);
            div.appendChild(p);
        
            bookMark.appendChild(div);
        
            let myObj = {
              id: item.id,
              title: item.title,
              description: item.description,
              bookmarked: true,
            };
        
            let options = {
              method: "PUT",
              body: JSON.stringify(myObj),
              headers: {
                "Content-Type": "application/json",
              },
            };
        
            fetch(url, options)
              .then((response) => response.json())
              .then((data) => {
                item.bookmarked = true;
              })
              .catch((error) => {
                console.log("Hata", error);
              });
          }
        });
        
      });
    });
});
