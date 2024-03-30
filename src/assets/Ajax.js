class Ajax {

    static async getSchedule(work, id) {
        let response = await fetch('http://134.0.107.94:9110/schedule/' + work + '/' + id);

        if (response.ok) {
            let json = await response.json();
            console.log(json.data)
            return json.data
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
}


export { Ajax }