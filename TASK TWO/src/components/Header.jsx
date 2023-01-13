import { Link } from 'react-router-dom'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2 col-1 left">
                    <Link to='/' >People</Link>
                </div>
                <div className="col-lg-10 col-11 right">
                    <Link to='/add' >Add</Link>
                </div>
            </div>
        </div>
    </header>
  )
}
