import * as React from 'react';
import { FlatList, SafeAreaView, SectionList, Text, View} from 'react-native';
import { data } from '../fake-API/dog-info'
import homeStyles from '../styles/homepage/home'
import Heading from '../components/homepage/Heading'
import WoofPost from '../components/homepage/Woofpost'
import WoofCard from '../components/homepage/Woofcard'

export default function HomeScreen () {
  const sections = [
    { title: 'Woofs', data: data.woofs, header: 'Trending Woofs'},
    { title: 'Posts', data: data.posts, header: 'New Woof Posts'},
  ];
  
  return (
    <SafeAreaView style={homeStyles.home}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id} //item = each obj of the nested array
        renderSectionHeader={({section}) => (<Heading>{section.header}</Heading>)}
        renderItem={({item})=> {
          if (item.title) { //find the unique property of the woofs and posts to render them separately; woofs array has 'name' porperty, while posts array has 'title' property
            return (
              <WoofPost
                url={item.image}
                title={item.title}
                description={item.description}
              />
            );
          }
        }}
        renderSectionFooter={({ section }) =>
          section.title === 'Woofs' && (
            <FlatList
              data={section.data}
              renderItem={({item}) => (
                <WoofCard
                  url={item.avatar}
                  name={item.name}
                />
              )}
              horizontal
              keyExtractor={(item) => item.id}
            />)
        }
      />
    </SafeAreaView>
  );
};

