/* export const loadPosts = async () => {
    const postRequest = fetch("https://jsonplaceholder.typicode.com/posts");
        const photosRequest = fetch("https://jsonplaceholder.typicode.com/photos");
        const [posts,photos] = await Promise.all([postRequest,photosRequest]);
        const postsJson = await posts.json();
        const photosJson = await photos.json();

        const postsAndPhotos = postsJson.map((post, index)=>{
          return {...post, cover: photosJson[index].url}
        })
        return postsAndPhotos;
} */

export async function loadPosts() {
  const postRequest = fetch("https://jsonplaceholder.typicode.com/posts");
        const photosRequest = fetch("https://jsonplaceholder.typicode.com/photos");
        const [posts,photos] = await Promise.all([postRequest,photosRequest]);
        const postsJson = await posts.json();
        const photosJson = await photos.json();

        const postsAndPhotos = postsJson.map((post, index)=>{
          return {...post, cover: photosJson[index].url}
        })
        return postsAndPhotos;
}