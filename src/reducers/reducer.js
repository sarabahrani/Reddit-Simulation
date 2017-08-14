
export default function form(state = {}, action) {
    switch (action.type) {
        case 'FETCH_REDDITS_SUCCEED':
        // Fill the store with the fetched data from JSON file
            return {
                ...state,
                reddits: action.reddits,
            };
        case 'FETCH_REDDITS_FAILED':
            return {
                ...state,
                message: action.message,
            };
        case 'UP_VOTE':
        // When an Up vote action raised , here the store and UP property changed
            {
                /*state must be immutate. So here to up or even downs a vote we need to change a property in objects of Store. */
                return {
                    // State is an object. we need to have a copy of state as well aparted to its objects
                    ...state,
                    //in Store we have reddits, an array ob objects we import from JSON file
                    // Because we should change the UP property of one of the objects in stroe, the structure of store should not change. In this action we pass an id to find that object
                    reddits: state.reddits.map((element) => {
                        //By itirrating on array of objects - reddit- and compare the id has been passed and id of objects
                        if (element.data.id === action.id) {
                            // After finding the element, it should be changed but just that one!!! not others. So, make a copy of element. there is a data property. 
                            //In the data property, the other property should not be change. so make a copy of data by spread element and change on UP property. That's it.
                            return {
                                ...element, data: { ...element.data, ups: element.data.ups + 1 }
                            };
                        }
                        //for other elements that condition not applied return them
                        else {
                            return { ...element };
                        }
                    })
                };
            }

            case 'DOWN_VOTE':
            // When an Down vote action raised , here the store and DOWN property changed
                {
                    return {
                        ...state,
                        reddits: state.reddits.map((element) => {
                            if (element.data.id === action.id) {
                                return {
                                    ...element, data: { ...element.data, downs: element.data.downs + 1 }
                                };
                            }
                            //for other elements that condition not applied return them
                            else {
                                return { ...element };
                            }
                        })
                    };
                }
        default:
            return state;
    }

}