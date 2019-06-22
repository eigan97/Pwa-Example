;
//Registro de caracteristicas de PWA
((d,w,n,c)=>{
	//para registrar un service worker solo necesito hacer una validacion de tipo if else
	if('serviceWorker' in n){
		w.addEventListener('load',()=>{
			n.serviceWorker.register('./sw.js')
			.then(register=>{
				c('service worker registrado', register);
			})
			.catch(error=>{
				c("error");
			})
		})
	}

})(document,window,navigator,console.log);
;
((d,w,n,c)=>{
var contenedor = d.getElementById('contain')
fetch('https://randomuser.me/api/?results=15')
	.then((data)=>{
		return data.json()
	})
	.then((response)=>{	
		var ul = d.createElement('ul')
		response.results.forEach((element,i)=>{
			setTimeout(()=>{
				var li = d.createElement('li')
				li.classList.add("item_contact")
				li.classList.add("fadeIn")
				li.classList.add("animated")
				li.setAttribute('onmouseover',`userInfo(${JSON.stringify(element)})`)
				li.innerHTML = `
							<img class="contact-thumbnail" src='${element.picture.thumbnail}'>
							<div class="contain-contact">
								<span class="contact-name"> ${element.name.first} ${element.name.last}:</span>
								<p class="contact-email"> ${element.email}</p>
								<div class="contact-index">
									<span class="contact-index-number">${i+1}</span>
								</div>
							</div>`
			ul.appendChild(li)

			},100*i)
		});
		contenedor.appendChild(ul)
	
	})	

	
})(document,window,navigator,console.log);

function userInfo(element){
		var card = document.getElementById('card-user')
		card.classList.add("fadeIn")
		card.classList.add("animated")
		card.innerHTML=	""
		var img = document.createElement('img')
		img.classList.add('large-picture')
		img.setAttribute('src',`${element.picture.large}`)
		var info = document.createElement('div')
		info.classList.add('contact-info')
		info.innerHTML=`	<p class="contact-name-card">@${element.login.username}</p>
							<hr>
							<span class="contact-gender-card"> ${element.gender} - <span>Edad: ${element.dob.age}</span></span>
							<p class="contact-email-card"> ${element.phone}</p>
							`

		card.appendChild(img)
		card.appendChild(info)
		setTimeout(()=>{

		card.classList.remove("fadeIn")
		card.classList.remove("animated")
	},1000)
}
