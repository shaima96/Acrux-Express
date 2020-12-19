import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './styles'

const DepartmentCard = ({ department,navigation}) => {
    // console.log(department)
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: department.image }}
                title="Go to DoctorDepartment page "
                onPress={() => {
                    navigation.navigate('DoctorDepartment', {
                        itemId:department._id,
                    });
                }}
            />
            {/* Name */}
            <Text
                style={styles.title}
            >{department.name} </Text>
            {/* Description */}
            <Text
                style={styles.about}
                numberOfLines={3}
            >{department.about}</Text>
        </View>
    )
}

export default DepartmentCard