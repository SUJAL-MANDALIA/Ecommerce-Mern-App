import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const User = () => {
    return (
        <Layout title={"Dashboard-All users"}>
            <div className="container-fluid m-3 p-3">
                <div className="row m-3">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>User list</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default User