import './analisis.css'
import movies from "../../data/imdb_movies.json"
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

//------------------------
const topRating = [...movies].sort((a,b) => b.Rating - a.Rating).slice(0,10); // Las 10 pelis con mayor imdb rating
const worstRating = [...movies].sort((a,b) => a.Rating - b.Rating).slice(113,123); // Las 10 pelis con MENOR imdb rating

//---------------------------
const cleanMovies = movies.filter(m => m.Gross).map(m => ({ // Pasar a número
    ...m,
    Gross: Number(m.Gross.replace(/,/g, "")), 
}));
const topGross = [...cleanMovies].sort((a,b) => b.Gross - a.Gross).slice(0,10); // Las 10 pelis con mayor recaudacion
const worstGross = [...cleanMovies].sort((a,b) => a.Gross - b.Gross).slice(0,10); // Las 10 pelis con menor recaudacion

// Recaudaciones por director ----------------
const grossPerDirector = Object.values(
  movies.reduce((acc, movie) => {
    const gross = Number(String(movie.Gross || "0").replace(/,/g, "")) || 0;
    const director = movie.Director;

    if (!acc[director]) {
      acc[director] = { Director: director, TotalGross: 0 };
    }

    acc[director].TotalGross += gross;

    return acc;
  }, {})
);

const topGrossDirectors = grossPerDirector.sort((a,b) => b.TotalGross - a.TotalGross).slice(0,5) // tomar los 10 mayores

//---------------------------
export function Analisis(){
    
    return (
    <>
        <hr className="my-5 " />
        <div className="analisis-container" >
            <h2 className='mb-4'>Top 10 Ratings mas <b>altos</b></h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topRating}>
                    <XAxis dataKey="Genre" />
                    <YAxis dataKey="Rating"/>
                    <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                        const movie = payload[0].payload; 
                        return (
                            <div
                            style={{
                                background: "white",
                                borderRadius: "15px",
                                padding: "10px",
                                lineHeight: "7px",
                                color: "#242424a1",
                            }}
                            >
                            <p><strong>Nombre:</strong> {movie.Name}</p>
                            <p><strong>Genero:</strong> {movie.Genre}</p>
                            <p><strong>Rating:</strong> {movie.Rating}</p>
                            </div>
                        );
                        }
                        return null;
                    }} />
                    <CartesianGrid strokeDasharray="4 4" />
                    <Legend />
                    <Bar dataKey="Rating" fill="#473dffb9" />
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="analisis-container my-5" >
            <h2 className='mb-4'>Top 10 Ratings mas <b>bajos</b></h2>
            <ResponsiveContainer>
                <BarChart data={worstRating}>
                    <XAxis dataKey="Genre" />
                    <YAxis dataKey="Rating" domain={[0, 12]}/>
                    <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                    const movie = payload[0].payload; 
                    return (
                        <div
                        style={{
                            background: "white",
                            borderRadius: "12px",
                            padding: "10px",
                            paddingTop: "15px",
                            lineHeight: "7px",
                            color: "#242424a1",
                        }}
                        >
                        <p><strong>Nombre:</strong> {movie.Name}</p>
                        <p><strong>Genero:</strong> {movie.Genre}</p>
                        <p><strong>Rating:</strong> {movie.Rating}</p>
                        </div>
                    );
                    }
                    return null;
                    }} />
                    <CartesianGrid strokeDasharray="4 4" />
                    <Legend />
                    <Bar dataKey="Rating" fill="#ff3131b9" />
                </BarChart>
            </ResponsiveContainer>
        </div>

        <div className="analisis-container my-5 " >
            <h2 className='mb-4'>Las 10 películas con <b>mayor</b> recaudación</h2>
            <ResponsiveContainer width="100%">
                <LineChart data={topGross}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Name" />
                    <YAxis 
                        width={90} 
                        domain={[0, "dataMax + 50000000"]}
                        tickFormatter={(value) => `$${(value / 1_000_000).toFixed(1)}M`} 
                    />
                    <Tooltip
                    contentStyle={{
                        borderRadius: "12px",  
                        padding: "10px",
                        color: "#00000077",
                        fontWeight: "bold",
                    }}
                    />  
                    <Legend />
                    <Line
                        type="natural"
                        dataKey="Gross"
                        stroke="#c2e914b9"
                        strokeWidth={6}
                        activeDot={{ r: 10 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>

        <div className="analisis-container my-5 " >
            <h2>Las 10 peliculas con <b>menor</b> recaudacion</h2>
            <ResponsiveContainer width="100%">
                <LineChart data={worstGross}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip
                        contentStyle={{
                            borderRadius: "12px",  
                            padding: "10px",
                            color: "#00000077",
                            fontWeight: "bold",
                        }}
                    />  
                    <Legend />
                    <Line
                        type="natural"
                        dataKey="Gross"
                        stroke="#ff5353cb"
                        strokeWidth={6}
                        activeDot={{ r: 10 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>

        <div className="analisis-container" >
            <h2>Los 5 directores con <b>mayor</b> recaudacion</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topGrossDirectors}>
                    <XAxis  dataKey="Director" />
                    <YAxis dataKey="TotalGross" 
                        width={90}
                        tickFormatter={(value) => `$${(value / 1_000_000).toFixed(1)}M`} 
                    />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Tooltip />
                    <Bar dataKey="TotalGross" fill="#fbff00a4"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
        
    </>
    );
}
