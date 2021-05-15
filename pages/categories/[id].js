import React from 'react';

const getAllCategoryIds = async () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(apiURL);
    const allCategory = await response.json();

    const allCategoryId = allCategory.map((category) => {
        return { params : { id: category.id.toString() } };
    });

    return allCategoryId;
}

export const getStaticPaths = async() => {
    const paths = await getAllCategoryIds();
    return {
        paths,
        fallback : false,
    };
}

const getUserData = async(id) => {
    const apiURL = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(apiURL);
    const userData = await response.json();

    return userData;
}

export const getStaticProps = async ({ params }) => {
    const userData = await getUserData(params.id);
    return {
        props : {
            userData: userData
        }
    }
}

export default class Category extends React.Component{
    render(){
        console.log(this.props.userData);
        return (
            <>
                {
                    this.props.userData ? (
                    <div>
                        <h1>{this.props.userData.name}</h1>
                        <p>{this.props.userData.email}</p>
                    </div>
                    ) : (
                    <p>Loading...</p>
                    )
                }
            </>
        );
    }
}