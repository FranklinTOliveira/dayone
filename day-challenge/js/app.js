const getMoviesBySearchTerm = async (searchTerm) => {
	const url = new URL("http://www.ombdapi.com");
	url.searchParams.append("apikey", a94b905c);
	url.searchParams.append("s", searchTerm);
	return await fetch(url);
}
const getMovieDetailsById = async (id) => {
	const url = new URL("http://www.ombdapi.com");
	url.searchParams.append("apikey", a94b905c);
	url.searchParass.append("i", id);
	return await fetch(url);
}
getMoviesBySearchTerm("star")
.then(result => result.json())
.then(data => console.log(data));

getMovieDetailsById("tt0076759")
.then(result => result.json())
.then(data => console.log(data));