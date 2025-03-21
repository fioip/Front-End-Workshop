    import { useState } from "react";

     function Search() {
      const [query, setQuery] = useState("");
    
      const handleSearch = (e:any)=> {
        setQuery(e.target.value);
      };
      const handleClear = () => {
        setQuery("");
      };


    return(
        <>
    <h1 style={
      {
        width: "200vh",
        textAlign: "center"
      }
    }> 
    Search bar
    </h1>
    <div style={{ padding: "16px", maxWidth: "600px", margin: "auto" }}>
      <div style={{ 
        display: "flex", 
        gap: "8px", 
        alignItems: "center", 
        marginBottom: "16px", 
        background: "#f8f9fa", 
        padding: "10px", 
        borderRadius: "8px", 
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <input
          type="text"
          placeholder="Caută..."
          value={query}
          onChange={handleSearch}
          style={{ 
            flex: 1, 
            padding: "10px", 
            fontSize: "16px", 
            border: "1px solid #ced4da", 
            borderRadius: "5px", 
            outline: "none" 
          }}
        />
        <button 
          onClick={handleClear} 
          style={{ 
            padding: "10px 16px", 
            fontSize: "16px", 
            cursor: "pointer", 
            background: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            transition: "background 0.3s"
          }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#007bff")}

        >
            Cauta
        </button>
      </div>
    </div>

     </>)
}

export default Search



