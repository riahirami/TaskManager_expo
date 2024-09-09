import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Project } from '../../models/projects/Project';
import { NO_PROJECTS } from '../../utils/constants';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormModal from '../../components/FormModal/FormModal';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import { styles } from './homeStyles';
type HomeScreenProps = {
  data: Project[] | undefined;
  handleCreateProject: (values: {
    nameOrTitle: string;
    description: string;
  }) => void;
  editProject: (project: Project) => void;
  navigateToProjectDetails: (project: Project) => void;
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({
  data,
  isModalVisible,
  setModalVisible,
  handleCreateProject,
  editProject,
  navigateToProjectDetails
}) => {
  return (
    <>
      <ScreenHeader
        screenTitle={'Welcome To Your task manager'}
        hasLeftButton={false}
        leftButtonTitle={'Back'}
        hasRightButton={false}
      />
      <View style={styles.container}>
        {isModalVisible && (
          <FormModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            confirmForm={handleCreateProject}
          />
        )}
        <View style={styles.addButtonContainer}>
          <CustomButton
            title="Add Project"
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProjectCard
              key={item.id}
              project={item}
              detailProject={navigateToProjectDetails}
              editProject={editProject}
            />
          )}
          ListEmptyComponent={<Text>{NO_PROJECTS}</Text>}
        />
      </View>
    </>
  );
};

export default HomeScreen;
