import { Pressable ,Text } from 'react-native';
import { Card } from '../../../../components';
import styles from './CateogoryItem.style';

const CategoryItem = ({ category, setCategorySelected }) => {
    return (
        <Pressable onPress={() => setCategorySelected(category)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem;