const button = document.querySelector(".button");
button.addEventListener("click", handleClick);
const div = document.querySelector('#container');

async function handleClick() {
    console.log("Wait Loading.....!");
        try {
                const response = await fetch("https://p-9x7e.onrender.com/products/products");
                const res = await response.json();
                const div = document.querySelector('#container');
                const table = document.createElement('table');
                console.log(res.data);

                res.data.forEach(item => {
                    const row = document.createElement('p1');

                    const idCell = document.createElement('p2');
                    idCell.textContent = item._id; 
                    row.appendChild(idCell);

                    const nameCell = document.createElement('p3');
                    nameCell.textContent = item.pName;
                    row.appendChild(nameCell);

                    table.appendChild(row);
                    console.log(row);
                });
                div.appendChild(table);

            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }