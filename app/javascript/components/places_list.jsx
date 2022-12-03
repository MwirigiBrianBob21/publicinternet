import React from 'react'
import ReactDOM from 'react-dom/client'

class PlaceList extends React.Component {
    render() {
        return (
            <div> Places list rendered in react</div>
        )
    }
}

const placeList = ReactDOM.createRoot(document.getElementById("places-list-container"));
placeList.render(<PlaceList />)