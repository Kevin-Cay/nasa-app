import { perseveranceRover } from "../../../data/roverInfo"

export default function handler(req, res) {
    res.status(200).json(perseveranceRover)
}