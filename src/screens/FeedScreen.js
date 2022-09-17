import {Flatlist}  from "react-Native";

const FeedScreen = () => {
  return (
    <FlatList
    data={posts}
    renderItem={({item}) => < Feedpost /> }/>
);
};

export default FeedScreen;