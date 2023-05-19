const Newsitem = (props) => {

    let { title, description, ImageTourl, newsurl, author, date, source } = props;
    return (
        <div>
            <div className="container">
                <div className="card text-bg-dark mb-3">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{
                        left: '90%',
                        zIndex: 1
                    }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={!ImageTourl ? "https://images.mid-day.com/images/images/2023/mar/Elite-Acko-Gummies23_d.jpg" : ImageTourl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-light">Read More</a>
                    </div>
                </div>
            </div>
        </div >
    )

}
export default Newsitem
