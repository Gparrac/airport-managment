async function fetchAirlines(){    
    const data = await new Promise(resolve => {
        setTimeout(()=>{
            resolve( [
                    {
                        code:'k3',
                        country: 'Colombia',
                        name: 'Latam'
                    },
                    {
                        code:'k3',
                        country: 'España',
                        name: 'Avianca'
                    },
                    {
                        code:'k3',
                        country: 'Mexico',
                        name: 'Latam3'
                    },
                    {
                        code:'k3',
                        country: 'El Salvador',
                        name: 'Express'
                    },
                ] )
            
        },1000)
    }) 
    
    return data
}
async function fetchAirports(){    
    const data = await new Promise(resolve => {
        setTimeout(()=>{
            resolve( [
                    {
                        code:'w3',
                        country: 'Colombia',
                        name: 'Latam'
                    },
                    {
                        code:'w3',
                        country: 'España',
                        name: 'Avianca'
                    },
                    {
                        code:'w3',
                        country: 'Mexico',
                        name: 'Latam2'
                    },
                    {
                        code:'w3',
                        country: 'El Salvador',
                        name: 'Express'
                    },
                ] )
            
        },1000)
    }) 
    
    return data
}
async function fetchPilots(){    
    const data = await new Promise(resolve => {
        setTimeout(()=>{
            resolve( [
                    {
                        code:'w3',
                        country: 'Colombia',
                        name: 'Juan Hurtado'
                    },
                    {
                        code:'w3',
                        country: 'España',
                        name: 'Oscar Cortes'
                    },
                    {
                        code:'w3',
                        country: 'Mexico',
                        name: 'Felipe Ortiz'
                    },
                    {
                        code:'w3',
                        country: 'El Salvador',
                        name: 'Cristian Martinez'
                    },
                ] )
            
        },1000)
    }) 
    
    return data
}
export {fetchAirports, fetchAirlines, fetchPilots};