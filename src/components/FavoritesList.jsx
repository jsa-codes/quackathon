


export default function FavoritesList() {
    const faves = localStorage.getItem('myCats');

    return (
        <div>{faves}</div>
    )
}