import "./share.css";


export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
                <input 
                placeholder="What's in your mind Safak?"
                className="shareInput"
                />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <i class="fa-sharp fa-solid fa-photo-film  shareIcon"></i>
                        <span className="shareOptionTesxt">Photo ou video</span>
                    </div>
                     <div className="shareOption">
                        <i class="fa-sharp fa-solid fa-tag  shareIcon"></i>
                        <span className="shareOptionTesxt">Tag</span>
                    </div>
                     <div className="shareOption">
                        <i class="fa-sharp fa-solid fa-location shareIcon"></i>
                        <span className="shareOptionTesxt">Localisation</span>
                    </div>
                     <div className="shareOption">
                        <i class="fa-sharp fa-solid fa-room shareIcon"></i>
                        <span className="shareOptionTesxt">Feeling</span>
                    </div>
                </div>
                <button className="shareButton">share</button>
            </div>
        </div>
    </div>
  )
}
