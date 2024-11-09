const fetchData = async() => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    return data;
}

export default fetchData;