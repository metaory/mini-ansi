import C from '../src/index.js'
import {ok,} from 'node:assert'
import { test } from 'node:test'

const { log } = console

test('---DEV--- [GOOD]', async () => {
  log(C.f2('green fg'), 'normal text', C.b4(' red bg '))
  log('norm', C.f1b3('red fg and yellow bg'), 'orrr', C.b2f6('cyan fg ongreen bg'))
  ok(true)
})
