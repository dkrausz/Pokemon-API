const baseURL = 'https://api.github.com/users/';

async function getUserData(){
const result = await fetch(`${baseURL}dkrausz`,{
    method:"GET",
    headers:{"Content-Type": "application/json",
},}).then((res)=>{
    return res.json();
})

}


// export const getArticles = async () => {
//     const result = await fetch(`${baseUrl}/v4/articles/`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((res) => {
//       return res.json();
//     });
  
//     // console.log(result.results);
//     return result.results;
//   };