

class ServiceSave {
    static save(body: object) {
        const settings = {
            method: 'POST',
            body: JSON.stringify(body)
        }

        // @ts-ignore
        return fetch('http://localhost:3001/api/saves/', settings )
    }
}

export default ServiceSave