import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/action";
import { VISIBILITY_FILTERS } from "../constants";

class VisibilityFilters extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { activeFilter, setFilter } = this.props;
        return (
            <div className="visibility-filters">
                {
                    Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                        const currentFilter = VISIBILITY_FILTERS[filterKey];
                        return (
                            <span
                                key={`visibility-filter-${currentFilter}`}
                                className={cx(
                                    "filter",
                                    currentFilter === activeFilter && "filter--active"
                                )}
                                onClick={() => {
                                    setFilter(currentFilter);
                                }}
                            >
                                {currentFilter}
                            </span>
                        );
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state =>  {
    return { activeFilter: state.visibilityFilter};
};

export default connect (
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);