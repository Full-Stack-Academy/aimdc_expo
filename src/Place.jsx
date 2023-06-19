import './Place.css';
function Place(props){
   const {src,name,date,action}=props;

    return <div class="place" onClick={action}>
    <img src={src}  />
    <p>{name}</p>
    <p>{date}</p>
</div>;
}
export default Place;
