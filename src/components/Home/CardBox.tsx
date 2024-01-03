import "../../Cards.css";
export default function CardBox() {
  return (
    <div className="wrapper">
      <div className="container">
        <input type="radio" name="slide" id="c1" />
        <label htmlFor="c1" className="card">
          <div className="column">
            <div className="icon">1</div>
            <div className="description">
              <h4>Winter</h4>
              <p className="hidden">
                Winter has so much to offer - creative activities
              </p>
              <button className="button-30" role="button">
                Button 30
              </button>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="column">
            <div className="icon">D</div>
            <div className="description">
              <h4>
                <button className="button-30" role="button">
                  Digital Technology
                </button>
              </h4>
              <p className="hidden">Gets better every day - stay tuned</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="column">
            <div className="icon">3</div>
            <div className="description">
              <h4>Globalization</h4>
              <p className="hidden">Help people all over the world</p>
              <button className="button-30" role="button">
                Button 30
              </button>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="column">
            <div className="icon">4</div>
            <div className="description">
              <h4>New technologies</h4>
              <p className="hidden">
                Space engineering becomes more and more advanced
              </p>
              <button className="button-30" role="button">
                Button 30
              </button>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
