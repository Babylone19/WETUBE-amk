import './style.css'


interface Video {
  id :number,
  title:String,
  description:String|null,
  mediaPath:String,
  status:boolean,
  userId:number
}

function buildVideoCard(_video :Video): string{
  return `
   <div class="space-y-3 w-full">
          <div class="w-full bg-red-600 rounded-lg">
              <video src="http://localhost:3000/videos/stream/${_video.id}" controls></video>
          </div>
          <div class="flex space-x-2">
              <div>
                  <img src="./assets/logo.png" class="w-10 h-10 rounded-full bg-red-600" alt="">
              </div>
              <div class="flex flex-col">
                  <span class="font-semibold w-[200px]">${_video.title}</span>
                  <span class="text-gray-500">${_video.description}</span>
                  
              </div>
          </div>
      </div>
  `
}

function buildVideosCards(_videos: Video[]): string{
  let html:string ="";
  for (const video of _videos){
    html+=buildVideoCard(video)
  }
  return html
}
function injectVideoCards(_videos:Video[]): void{

  const listTag = document.getElementById('list')
  if(listTag !==null){
    listTag.innerHTML=buildVideosCards(_videos);
  }
 
  
}
try{
  const response = await fetch('http://localhost:3000/videos/')
  
  if (response.status===200){

    console.log("success")
    const videos:Video[]= await response.json();
    injectVideoCards(videos);
    console.log(videos[0]);
    
  }else if(response.status===500){
    console.log("error")
  }
  console.log(response)

}catch(error){
  console.error(error)
}

// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
