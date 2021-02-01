fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	
	displayData(data)
})

function displayData(info){
	/*var bodyElement=document.querySelector("body");
	var newElement=document.createElement("p")
	newElement.textContent="HI EVERYONE......."
	console.log(newElement)
	bodyElement.append(newElement)
	var sampleElement=document.createElement("img")
	sampleElement.src="img/iphone11.jpg";
	sampleElement.classList.add("class1","class2","class3")
	sampleElement.classList.remove("class3")
	var bodyElement=document.querySelector("body");
	bodyElement.append(sampleElement)*/
	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center")
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3")
		row.append(column)
		//card
		var card=document.createElement("div");
		card.classList.add("card","mt-4")
		//card-body
		var cardBody=document.createElement("div");
		card.classList.add("card-body")
		card.append(cardBody);
		column.append(card);
		//image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.alt=value.name;
		//Name
		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-primary")
		//price
		var price=document.createElement("p");
		price.classList.add("text-danger")
        price.innerHTML="<s>₹ "+value.price+"/-</s>";

        var oPrice=document.createElement("p");
        oPrice.classList.add("text-secondary")
        oPrice.innerHTML="₹ "+value.originalPrice+"/-";
        
        //button
        var buttonParent=document.createElement("div");
        buttonParent.classList.add("d-grid","gap-2");

        var buttonParent1=document.createElement("div");
        buttonParent1.classList.add("d-grid","gap-2");

        var button=document.createElement("button");
        button.classList.add("btn","btn-warning","btn-block","m-2");
        button.textContent="ADD TO CART"
        buttonParent.append(button);

        var button1=document.createElement("button");
        button1.classList.add("btn","btn-primary","btn-block","m-2");
        button1.textContent="BUY NOW"
        buttonParent1.append(button1);

		cardBody.append(imageElement)
		cardBody.append(name)
		cardBody.append(price)
		cardBody.append(oPrice)
		cardBody.append(buttonParent)
		cardBody.append(buttonParent1)
		card.append(cardBody);
		column.append(card);
 	})
}