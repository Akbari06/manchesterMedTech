function CommitteeCard () {

    const styles = {
        backgroundColor: "##331333",
        padding: "20px",
        textAlign: "center",
        border: "5px darkgrey",
        borderRadius: "15px",
        width: "70%"
    }
    return(
        <div style ={styles}>
            <p>Society role</p>
            <p>Name</p>
            <p>A bit about themself</p>
        </div>
    )
}

export default CommitteeCard ;
