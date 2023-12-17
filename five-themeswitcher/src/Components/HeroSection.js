import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Color";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme]
    // currentTheme provided all css that should be apply
    
    const [themeMode1, setThemeMode1] = useContext(ThemeContext);
    
    return(
        
        <div style={ 
            {
                padding : "1rem",
                backgroundColor : `${currentTheme.backGroundColor}`,
                color : `${currentTheme.textColor}`,
                textAlign : "center"
            }
        }>
            <h1>
                Context API theme toggler
            </h1>
            <p>This is nice paragraph</p>

            <button style={
                {
                    background : "#26ae60",
                    padding : "10px 150px",
                    fontSize : "20px" ,
                    color  :  "#FFF",
                    border : `${currentTheme.border}`

                }}
                onClick={() => {
                    setThemeMode1(themeMode1==="light" ? "dark" : "light")
                }}


            >Click me</button>
            
        </div>
        
    )
    

}

export default HeroSection;