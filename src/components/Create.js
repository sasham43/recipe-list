import { useState, } from 'react'
import { useForm } from '@mantine/form'
import { Group, TextInput, Button } from '@mantine/core'
import { DatePicker } from '@mantine/dates'

import { saveRecipe } from '../recipes'


export default function Create(){
    const form = useForm({
        initialValues: {
            name: '',
            created: null,
            creator: '',
            ingredients: [],
            steps: [],
        },
    })

    function handleSubmit(values){
        console.log('values', values)
        saveRecipe(values)
    }

    const [newIngredientQuantity, setNewIngredientQuantity] = useState('')
    const [newIngredientName, setNewIngredientName] = useState('')

    function onQuantity(value){
        setNewIngredientQuantity(value)
    }
    function onName(value){
        setNewIngredientName(value)
    }
    function addIngredient(quantity, name){
        form.setFieldValue('ingredients', [...form.values.ingredients, {quantity, name}])
        console.log('form', form)
        setNewIngredientQuantity('')
        setNewIngredientName('')
    }
    function removeIngredient(index) {
        form.setFieldValue('ingredients', form.values.ingredients.filter((ing, i) => i != index))
    }

    const [newStep, setNewStep] = useState('')

    function onStep(value){
        setNewStep(value)
    }
    function addStep(step){
        form.setFieldValue('steps', [...form.values.steps, step])
        setNewStep('')
    }
    function removeStep(index) {
        form.setFieldValue('steps', form.values.steps.filter((step, i) => i != index))
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
                <div>
                    <div>Ingredients</div>
                    <ul>
                        {
                            form?.values.ingredients?.map((ingredient, index) => {
                                return (
                                    <li key={`ingredient-${index}`}>
                                        <span>
                                            {ingredient.quantity} {ingredient.name}
                                        </span>
                                        <Button onClick={()=>removeIngredient(index)}>Remove</Button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={'ingredients'}>
                        <TextInput
                            name="Ingredient Quantity"
                            placeholder="1 cup"
                            value={newIngredientQuantity}
                            onChange={(e) => onQuantity(e.target.value)}
                        />
                        <TextInput
                            name="Ingredient Name"
                            placeholder="flour"
                            value={newIngredientName}
                            onChange={(e) => onName(e.target.value)}
                        />
                        <Button onClick={() => addIngredient(newIngredientQuantity, newIngredientName)}>Add</Button>
                    </div>
                </div>
                <div>
                    <div>Steps</div>
                    <ol>
                        {
                            form?.values.steps?.map((step, index) => {
                                return (
                                    <li key={`step-${index}`}>
                                        <span>
                                            {step}
                                        </span>
                                        <Button onClick={()=>removeStep(index)}>Remove</Button>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <div className={'steps'}>
                        <TextInput
                            name="Next Step"
                            value={newStep}
                            placeholder="Preheat oven to 350F"
                            onChange={(e) => onStep(e.target.value)}
                        />
                        <Button onClick={() => addStep(newStep)}>Add</Button>
                    </div>
                </div>

                <Group>
                    <Button type="submit">Save</Button>
                </Group>
            </form>
        </>
    )
}