export const todoUpdate = async (url, updatedPost) => {
   const res = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
   })

   return res;
}
export const itemPutUpdate = async (url, updatedPost) => {
   const res = await fetch(url, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
   })

   return res;
}
export const todoDelete = async (url) => {
   const res = await fetch(url, {
      method: 'DELETE'
   })
   return res;
}

export const fetchById = async (url) => {

   try {
      const res = await fetch(url, {
         method: 'GET'
      })
      const data = await res.json();
      return data;

   } catch (error) {
      console.log(error);
   }

}