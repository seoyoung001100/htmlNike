fetch('new.json')
    .then(response => response.json())
    .then(data => {
        // map 함수를 사용하여 각 제품의 정보를 HTML 요소로 변환하고, 이를 배열로 반환합니다.
        const elements = Object.values(data).map(item => {
            // 각 제품 정보를 가져옵니다.
            var product = item[0];

            // 제품을 나타내는 div 요소를 생성합니다.
            var productDiv = document.createElement('div');

            // 제품 정보를 나타내는 HTML 요소들을 생성하고, productDiv에 추가합니다.
            var img = document.createElement('img');
            img.src = product['img'];
            productDiv.appendChild(img);

            var productName = document.createElement('h2');
            productName.textContent = product['product-name'];
            productDiv.appendChild(productName);

            var price = document.createElement('p');
            price.textContent = product['price'];
            productDiv.appendChild(price);

            // productDiv를 반환합니다.
            return productDiv;
        });

        // elements 배열에 있는 모든 요소를 body에 추가합니다.
        elements.forEach(element => {
            document.body.appendChild(element);
        });
    })
    .catch(error => console.error('Error:', error));


function shoesComponent(){
    const shoes = document.createElement('shoes');
    shoes.innerHTML = `

    `;
}