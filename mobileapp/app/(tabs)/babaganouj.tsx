import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function () {
    return (
    <View>
        <Text> This is the baba ganouj page 🧆</Text>
        <Link href="/sandwich">Go to Sandwich Page</Link>
    </View>
    );
}