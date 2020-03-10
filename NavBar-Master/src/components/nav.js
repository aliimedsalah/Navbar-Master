import React from 'react';

function Nav(props) { 
return (

    <div>

    <ul className="listtt">
    {props.property.map(Element => <li className={Element.cla}> {Element.menu}
<ul className="dropdown">
    {!Element.drop ? null : Element.drop.map (Element => <li>{Element}</li>)}
</ul>

    </li>
    
    )}
</ul>
</div>
);


}

export default Nav;