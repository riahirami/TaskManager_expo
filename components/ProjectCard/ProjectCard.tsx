import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Project } from '../../models/projects/Project';
import CustomButton from '../CustomButton/CustomButton';
import styles from './projectCardStyles';

interface ProjectCardProps {
  project: Project | undefined;
  detailProject: (project: Project) => void;
  editProject: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  detailProject,
  editProject
}) => {
  if (!project) return <Text>no data found</Text>;

  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={() => detailProject(project)}>
        <View style={styles.innerContainer}>
          <Text>{project.name}</Text>
          <View style={styles.buttonContainer}>
            <CustomButton title={'Edit'} onPress={() => editProject(project)} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProjectCard;
