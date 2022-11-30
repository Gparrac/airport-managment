import React, { useState, useEffect } from "react";
import { fetchAirports, fetchAirlines, fetchPilots } from "../querys/datos";
import { useForm } from "react-hook-form";
function FormFly() {
  //formulario
  const { register, formState:{errors}, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [airports, setAirports] = useState([]);
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const rtaAirports = await fetchAirports();
      const rtaAirlines = await fetchAirlines();
      const rtaPilots = await fetchPilots();
      setAirlines(rtaAirlines);
      setAirports(rtaAirports);
      setAirports(rtaPilots);
    };
    const rtaAirports = fetchData().catch(console.error);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="conatainer px-auto flex flex-col max-w-3xl p-5 shadow-2xl"
    >
      <h3 className="text-2xl font-semibold mb-2 mt-3">Aerolinea</h3>
      <select
        className="text-2xl min-h-min h-10 ps-3 bg-gray-200 rounded"        
        {...register('airline',{
          required: {
            value: true,
            message: "Aerolinea requerida",
          },
        })}
      >
        {airlines.map((item) => (
          <option value={item.code} key={item.code + "-" + item.name}>{item.code + "-" + item.name} </option>
        ))}
      </select>
      {errors.airline && <p className="text-pink-700 text-base mt-4">{errors.airline?.message}</p>}
      <h3 className="text-2xl font-semibold mb-2 mt-3">No. Vuelo</h3>
      <input
        type="number"
        className="text-2xl min-h-min h-10 ps-3 bg-gray-200 rounded"        
        {...register("noVuelo",{
            required:{
                value:true,
                message: "Numero de vuelo"
            },
            min:{
                value:0,
                message:"El número minimo de vuelos debe ser mayor a 0."
            }

        })}
      ></input>
      {errors.noVuelo && <p className="text-pink-700 text-base mt-4">{errors.noVuelo?.message}</p>}
      <h3 className="text-2xl font-semibold mb-2 mt-3">Aeropuerto</h3>
      <select className="text-2xl min-h-min h-10 ps-3 bg-gray-200 rounded">
        {airports.map((item) => (
          <option value={item.code} key={item.code + "-" + item.name}>{item.code + "-" + item.name}</option>
        ))}
      </select>
      <h3 className="text-2xl font-semibold mb-2 mt-3">Piloto</h3>
      <select className="text-2xl min-h-min h-10 ps-3 bg-gray-200 rounded">
        {airports.map((item) => (
          <option value={item.code} key={item.code + "-" + item.name}>{item.code + "-" + item.name}</option>
        ))}
      </select>
      <button className="text-3xl  py-3 mt-5 mb-3 bg-blue-500 text-white rounded">
        Crear
      </button>
    </form>
  );
}

export default FormFly;
