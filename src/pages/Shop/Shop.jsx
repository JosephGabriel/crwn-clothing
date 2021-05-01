import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Spinner from "../../components/Spinner/Spinner";

const CollectionContainer = lazy(() =>
  import("../Collection/CollectionContainer")
);

const CollectionOverviewContainer = lazy(() =>
  import("../../components/CollectionOverview/CollectionOverviewContainer")
);

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.url}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.url}/:collectionId`}
            component={CollectionContainer}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
