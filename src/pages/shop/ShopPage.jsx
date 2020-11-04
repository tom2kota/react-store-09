import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {collectionsOverviewContainer} from "../../components/collections-overview/collectionOverviewContainer";
import {collectionPageContainer} from "../collection/collectionPageContainer";
import {fetchCollectionsStart} from "../../redux/shop/shopActions";
import './ShopPage.scss';

const ShopPage = ({match, fetchCollectionsStart}) => {

    useEffect(
        () => {
            console.log('useEffect - Shop page')
            fetchCollectionsStart()
        }, [fetchCollectionsStart]
    )

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={collectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={collectionPageContainer}/>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
