let url = "https://www.dnd5eapi.co/api/classes/bard/spells"

const Spells = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(console.error);
    return (
        <div>
            
        </div>
    )
}

export default Spells
