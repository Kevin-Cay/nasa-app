import { curiosityRover } from "../../../data/roverInfo"

export default function handler(req, res) {
    res.status(200).json(curiosityRover)
}