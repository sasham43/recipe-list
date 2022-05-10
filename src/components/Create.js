import { useState, } from 'react'
import { useForm } from '@mantine/form'
import { Group, TextInput, NumberInput, Button, ActionIcon, Card } from '@mantine/core'
import { Link } from 'react-router-dom'
import { DatePicker } from '@mantine/dates'
import { CircleMinus, CirclePlus, ArrowLeft } from 'tabler-icons-react';

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
            <Card shadow="sm" className={`page-card`}>
                <Link to={`/`}>
                    <ActionIcon title={'Back to Recipe List'}>
                        <ArrowLeft alt={'Back to Recipe List'}></ArrowLeft>
                    </ActionIcon>
                </Link>
                <h1>Create Recipe</h1>
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
                        {...form.getInputProps('created')}
                    />
                    <TextInput
                        required
                        label="Creator"
                        placeholder="Rosie Jones"
                        {...form.getInputProps('creator')}
                    />
                    <NumberInput
                        required
                        label="Cooking Time (minutes)"
                        placeholder="120"
                        {...form.getInputProps('creator')}
                    />
                    <div className={`create-card`}>
                        <div>Ingredients</div>
                        <ul>
                            {
                                form?.values.ingredients?.map((ingredient, index) => {
                                    return (
                                        <li key={`ingredient-${index}`}>
                                            <div className={`create-ingredient`}>
                                                <span>
                                                    {ingredient.quantity} {ingredient.name}
                                                </span>
                                                <ActionIcon title={'Remove Ingredient'} onClick={() => removeIngredient(index)}>
                                                    <CircleMinus alt={'Remove Ingredient'}></CircleMinus>
                                                </ActionIcon>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={'create-ingredients'}>
                            <TextInput
                                label="Ingredient Quantity"
                                placeholder="1 cup"
                                value={newIngredientQuantity}
                                onChange={(e) => onQuantity(e.target.value)}
                            />
                            <TextInput
                                label="Ingredient Name"
                                placeholder="flour"
                                value={newIngredientName}
                                onChange={(e) => onName(e.target.value)}
                                className={`create-ingredient-name`}
                            />
                            <ActionIcon title={'Add Ingredient'} onClick={() => addIngredient(newIngredientQuantity, newIngredientName)}>
                                <CirclePlus alt={'Add Ingredient'}></CirclePlus>
                            </ActionIcon>
                        </div>
                    </div>
                    <div className={`create-card`}>
                        <div>Steps</div>
                        <ol>
                            {
                                form?.values.steps?.map((step, index) => {
                                    return (
                                        <li key={`step-${index}`}>
                                            <div className={`create-step`}>
                                                <span>
                                                    {step}
                                                </span>
                                                <ActionIcon onClick={()=>removeStep(index)} title={'Remove Step'}>
                                                    <CircleMinus alt={'Remove Step'}></CircleMinus>
                                                </ActionIcon>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                        <div className={'create-steps'}>
                            <TextInput
                                label="Next Step"
                                value={newStep}
                                placeholder="Preheat oven to 350F"
                                onChange={(e) => onStep(e.target.value)}
                                className={`create-next-step`}
                            />
                            <ActionIcon onClick={() => addStep(newStep)} title={'Add Step'}>
                                <CirclePlus alt={'Add Step'}></CirclePlus>
                            </ActionIcon>
                        </div>
                    </div>

                    <Group>
                        <Button color="dark" title={'Save Recipe'} type="submit">Save</Button>
                    </Group>
                </form>
            </Card>
        </>
    )
}