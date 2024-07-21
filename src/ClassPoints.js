import { useDispatch, useSelector } from "react-redux";
import { addPoints, resetPoints } from "./redux/actions/pointsActions";
import { useState, useEffect } from "react";
import './ClassPoints.css';
import logo from './(1).jpg';

export default function ClassPoints() {
    const points = useSelector((state) => state.points);  
    const [pointsToAdd, setPointsToAdd] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [leadingClass, setLeadingClass] = useState(null);
    const dispatch = useDispatch();
    const sortedPoints = points ? [...points].sort((a, b) => b.points - a.points) : [];

    const addPointsToClass = () => {
        if (selectedClass && pointsToAdd > 0) {
            const classItem = points.find((c) => c.class === selectedClass);
            if (classItem) {
                dispatch(addPoints(classItem.id, pointsToAdd));   
                setLeadingClass(classItem.class); // Update leading class
                setSelectedClass("");
                setPointsToAdd("");
                
            } else {
                alert("כיתה לא נמצאה");
            }
        } else {
            alert("אנא הזן נקודות תקינות ובחר כיתה");
        }   
    };

    const handleResetPoints = () => {
        dispatch(resetPoints());
        setLeadingClass(null); // Reset leading class
    };

    return (
        <div className="container">
             <div className="logo-section">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="points-section">
                {/* כל התוכן של הנקודות */}
                {/* <div className="button-container">
                    <button onClick={handleResetPoints}>איפוס נקודות</button>
                </div> */}
                {leadingClass && (
                    <div className="leading-class">
                        הכיתה המובילה: {leadingClass}
                    </div>
                )}
                <div className="points-container">
                    {sortedPoints ? sortedPoints.map((item) => (
                        <div key={item.id} className="points-item">
                            <h1>{item.class}</h1>
                            <h2>{item.points}</h2>
                        </div>
                    )) : <div>המוצרים הם null</div>}
                </div>
                <div className="input-container">
                    <input 
                        type="number" 
                        value={pointsToAdd} 
                        onChange={(e) => setPointsToAdd(Number(e.target.value))} 
                        placeholder="נקודות" 
                    />
                    <input 
                        type="text" 
                        value={selectedClass} 
                        onChange={(e) => setSelectedClass(e.target.value)} 
                        placeholder="לכיתה" 
                    />
                    <button onClick={addPointsToClass}>הוספה</button>
                </div>
            </div>
           
        </div>
    );
}
