import { useForm } from '@mantine/form'
import { TextInput, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'


export default function Create(){
    const form = useForm({
        initialValues: {
            name: '',
            created: null,
            creator: '',
            ingredients: [{
                quantity: '',
                name: '',
            }],
            steps: [''],
        },
    })

    function handleSubmit(values){
        console.log('values', values)
    }

    return (
        <>
            <div>Create</div>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    required
                    label="Name"
                    placeholder="Grandma's Muffins"
                    {...form.getInputProps('name')}
                />
                <DatePicker
                    label="Created"
                    placeholder="Jan 1, 1970"
                    required
                />
                <TextInput
                    required
                    label="Creator"
                    placeholder="Rosie Jones"
                    {...form.getInputProps('creator')}
                />

                <Button type="submit">Save</Button>
            </form>
        </>
    )
}