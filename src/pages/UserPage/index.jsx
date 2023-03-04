import React from 'react'
import './user.scss'
import avatar from "../../assets/Img/Huy.jpg"

const UserPage = () => {
  return ( 
    <div className="container_profile">
        <div className="main_user">
            <div className="row">
                <div className="col-md-4 mt-1">
                    <div className="card text-center sidebar">
                        <div className="card-body">
                            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" classNameName='rounded-circle' width="150"/>
                            <div className="mt-3">
                                <h3>Huydanger</h3><br/>
                                <a href="">Home</a>
                                <a href="">Work</a>
                                <a href="">Support</a>
                                <a href="">Setting</a>
                                <a href="">Signout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_user col-md-8 mt-1">
                <div className="card mb-3 content_profile">
                    <h1 className="m-3 pt-3">About</h1>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Full Name</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                Pham Gia Huy
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Email</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                huydanger123@gmail.com
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Phone</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                0988 661 ***
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Address</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                Da Nang City
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 content_use">
                    <h1 className="m-3">Recent Projects</h1>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Project Name</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                Project Description
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPage