/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./player.css";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if(isEditing)
        {onChangeName(symbol, playerName);}
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing === true ) {
        editablePlayerName = <input type="text" requiered value={playerName} onChange={handleChange} />       
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Sauvegarder' : 'Editer'}</button>
        </li>
    );
}
