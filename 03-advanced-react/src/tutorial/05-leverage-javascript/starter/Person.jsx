import React from "react";
import avatar from "../../../assets/default-avatar.svg"
export function Person({ name, nickName = "ShakeAndBake", images }) {
  const img = images?.[0]?.small?.url ?? avatar;
  return (
        <div>
            <img className="img" style={{width:"100px", marginInline:"auto"}} src={img}></img>
            <h2>
                {name} <small>{nickName}</small>
            </h2>
            <hr />
        </div>
    );
}
