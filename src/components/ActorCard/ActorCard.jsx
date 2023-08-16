import "./ActorCard.css"; 

export default function ActorCard({ actor }) {
    return (
        <div className="actor-card">
            <h1>{actor}</h1>
        </div>
    );
}